from .common import *



# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('DJANGO_SECRET_KEY')

# https://docs.djangoproject.com/en/1.10/ref/settings/#s-allowed-hosts
ALLOWED_HOSTS = ['activ-business-staging.herokuapp.com']

# STATIC FILE CONFIGURATION
# ------------------------------------------------------------------------------
# See: https://docs.djangoproject.com/en/dev/ref/settings/#static-root
CDN_STATIC_URL = 'http://d1n70wpyehmcy6.cloudfront.net/'


# CUSTOM SETTINGS
# ------------------------------------------------------------------------------
GOOGLE_ANALYTICS_ENABLED = True