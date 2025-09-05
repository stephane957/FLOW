
# Description: This file contains utility functions for the translation of enums.
def convert_enum_to_text(enum_mappings, field_name, value):
    if value is None:
        return None
    enum_class = enum_mappings.get(field_name)
    if enum_class:
        return enum_class.from_ordinal(value).text
    return None

def convert_text_to_enum(enum_mappings, field_name, text_value):
    if text_value is None:
        return None
    enum_class = enum_mappings.get(field_name)
    if enum_class:
        return enum_class.to_ordinal(text_value)
    return None