import os
import asyncio
from multiprocessing import Process
import time
import uvicorn
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

env_file = '.env.prod' if os.getenv('ENV') == 'prod' else '.env.dev'
load_dotenv(dotenv_path=env_file)

from database.database import engine, Base

from api.generate_excel import router as excel_router
from api.image import router as image_router
from api.pollution import router as pollution_router
from api.samples import router as sample_router
from api.stats import router as stats_router
from api.tide_data import router as tide_router
from api.users import router as user_router

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(tide_router)
app.include_router(sample_router)
app.include_router(stats_router)
app.include_router(image_router)
app.include_router(excel_router)
app.include_router(user_router)
app.include_router(pollution_router)
app.add_middleware(CORSMiddleware, allow_origins=['*'], allow_credentials=True, allow_methods=['*'], allow_headers=['*'])

@app.get('/')
async def home():
    return {'message': 'Welcome!'}

def run_server():
    print("Running server")
    config = uvicorn.Config("main:app", host="0.0.0.0", port=8080, reload=True)
    server = uvicorn.Server(config)
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    loop.run_until_complete(server.serve())

def run_tests():
    print("Running tests")
    from tests.users import test_users
    from tests.samples import test_samples
    from tests.users import test_users
    from tests.stats import test_stats
    from tests.excel import test_drive_sequence
    from tests.pollution import get_pollution_map

    user_id = test_users()
    test_samples(user_id)
    test_stats(user_id)
    test_drive_sequence(user_id) # Requires Google Drive API
    get_pollution_map()

def main(test_mode):
    if test_mode:
        server_process = Process(target=run_server)
        server_process.start()
        time.sleep(5)
        run_tests()
        server_process.terminate()
        server_process.join()
    else:
        run_server()

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description='Run the script in test or normal mode.')
    parser.add_argument('--test', action='store_true', help='Run in test mode')
    args = parser.parse_args()
    
    main(test_mode=args.test)