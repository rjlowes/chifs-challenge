from django.db import models


class TimeStampedModel(models.Model):
    """ An abstract base class that provides self updating created and modified fields """
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class PageMeta(models.Model):
    meta_title = models.CharField(max_length=65, blank=True, help_text='Search engines display only 65-75 chars.')
    meta_keywords = models.CharField(max_length=100, blank=True)
    meta_description = models.CharField(max_length=160, blank=True, help_text="Search engines limit to 160 chars diplayed.")

    class Meta:
        abstract=True


class Layout(TimeStampedModel):
    footer_about = models.TextField(blank=True)
    footer_links = models.TextField(blank=True)
    footer_social = models.TextField(blank=True)
    copyright = models.CharField(max_length=255, blank=True)

    class Meta:
        db_table = 'layout'

    def __str__(self):
        return 'Layout'

