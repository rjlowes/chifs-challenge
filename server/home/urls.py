from django.conf.urls import url

from .views import HomeView, RegisterView, PageView

urlpatterns = [
    url(r'register$', RegisterView.as_view(), name='register'),
    url(r'(?P<slug>[\w\-]+)$', PageView.as_view(), name='content'),
    url(r'$', HomeView.as_view(), name='home'),
]
