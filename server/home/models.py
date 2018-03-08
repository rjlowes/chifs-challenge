from django.db import models
from core.models import TimeStampedModel

TSHIRT_SIZE_CHOICES = (
    ('XS', 'XS'),
    ('S', 'S'),
    ('M', 'M'),
    ('L', 'L'),
    ('XL', 'XL'),
)

GENDER = (
    ('M', 'Male'),
    ('F', 'Female'),
)

class Participant(TimeStampedModel):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    tshirt_size = models.CharField(max_length=2, choices=TSHIRT_SIZE_CHOICES)
    gender = models.CharField(max_length=1, choices=GENDER)
    registered_online = models.BooleanField(default=True, help_text='Keep track of anyone registered online or via admin by ourselves')
    notes = models.TextField()
    telephone = models.CharField(max_length=20, blank=True)

    class Meta:
        db_table = 'participant'

    def __str__(self):
        online = " - registered online" if self.registered_online else " - registered by admin"
        online += " ~ %s" % self.notes
        return "%s (%s) (%s) %s" % (self.name, self.email, self.telephone, online);

class Page(TimeStampedModel):
    slug = models.CharField(max_length=30, unique=True)
    title = models.CharField(max_length=100)
    body = models.TextField()

    class Meta:
        db_table = 'page'

    def __str__(self):
        return self.title;
