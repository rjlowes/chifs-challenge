from django.conf import settings


def get_env(request):
    return {
        'GOOGLE_ANALYTICS_ENABLED': settings.GOOGLE_ANALYTICS_ENABLED,
        'CDN_STATIC_URL': settings.CDN_STATIC_URL,
        'CDN_MEDIA_URL': settings.CDN_MEDIA_URL,
    }
