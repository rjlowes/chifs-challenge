import json
import urllib
import urllib.request

from django.views.generic import TemplateView, View
from django.template.response import TemplateResponse
from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404
from django.conf import settings
from django.contrib import messages
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
            result = self.validateRecaptcha(request.POST.get('g-recaptcha-response'))
            if result['success']:
                participant = form.save(request)
                return HttpResponseRedirect('/info-pack')
            else:
                messages.error(request, 'Invalid reCAPTCHA. Please try again.')
                return TemplateResponse(request, 'home/index.html', {'registration_form': form, 'invalid': True})
        else:
            return TemplateResponse(request, 'home/index.html', {'registration_form': form, 'invalid': True})

    def validateRecaptcha(self, recaptcha_response):
        url = 'https://www.google.com/recaptcha/api/siteverify'
        values = {
            'secret': settings.GOOGLE_RECAPTCHA_SECRET_KEY,
            'response': recaptcha_response
        }
        data = urllib.parse.urlencode(values).encode()
        req =  urllib.request.Request(url, data=data)
        response = urllib.request.urlopen(req)
        result = json.loads(response.read().decode())

        return result

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
