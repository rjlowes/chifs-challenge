from django.views.generic import TemplateView, View
from django.template.response import TemplateResponse


class HomeView(View):
    def get(self, request):        
        return TemplateResponse(request, 'home/index.html')
