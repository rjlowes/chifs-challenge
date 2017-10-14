from django import template

register = template.Library()

@register.filter
def get_class(idx):
    clazz = "";

    if idx in [1, 4, 6]:
        clazz += 't-home-puzzle-grid__unit1'
    else:
        clazz += 't-home-puzzle-grid__unit2'

    if idx == 2:
        clazz += ' t-home-puzzle-grid__unit2--clear-right'

    if idx == 6:
        clazz += ' t-home-puzzle-grid__unit1--offset'

    return clazz;


@register.filter
def img_type(idx):
    pass