from django.views.generic import TemplateView, View
from django.template.response import TemplateResponse
from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404
from home.forms import RegistrationForm
from home.models import Page

class HomeView(View):
    def get(self, request):
        form = RegistrationForm()
        return TemplateResponse(request, 'home/index.html', {'registration_form': form})

class RegisterView(View):
    def post(self, request):
        form = RegistrationForm(request.POST)
        if form.is_valid():
            participant = form.save(request)
            return HttpResponseRedirect('/welcome-pack')
            # return HttpResponseRedirect('/articles/%d/%s' % (int(pk), article.slug))
        else:
            return TemplateResponse(request, 'home/index.html', {'registration_form': form})

class PageView(View):
    def get(self, request, slug):
        page = get_object_or_404(Page, slug=slug)
        return TemplateResponse(request, 'home/page.html', {'page': page})

class WelcomePackView(View):
    def get(self, request):
        return TemplateResponse(request, 'home/welcome-pack.html')

class AboutView(View):
    def get(self, request):
        return TemplateResponse(request, 'home/about.html')
