# Description: This file contains the BaseEnum class.
import enum

class BaseEnum(enum.Enum):
    def __init__(self, num, text):
        self.num = num
        self.text = text

    @classmethod
    def from_ordinal(cls, ordinal):
        for item in cls:
            if item.num == ordinal:
                return item
        return None

    @classmethod
    def to_string(cls, ordinal):
        item = cls.from_ordinal(ordinal)
        return item.text if item else None

    @classmethod
    def from_string(cls, text):
        for item in cls:
            if item.text == text:
                return item
        return None
    
    @classmethod
    def to_ordinal(cls, text):
        item = cls.from_string(text)
        return item.num if item else None

    def __str__(self):
        return self.text
