from django import template

register = template.Library()


@register.filter
def multiply(operand1, operand2):
    return operand1 * operand2
