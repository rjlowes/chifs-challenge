from django import forms
from home.models import Participant, TSHIRT_SIZE_CHOICES, GENDER


class RegistrationForm(forms.ModelForm):
    name = forms.CharField(label='Name')
    tshirt_size = forms.CharField(
        max_length=2,
        widget=forms.Select(choices=TSHIRT_SIZE_CHOICES),
    )
    gender = forms.CharField(
        max_length=1,
        widget=forms.Select(choices=GENDER),
    )

    class Meta:
        model = Participant
        fields = ['name', 'email', 'telephone', 'tshirt_size', 'gender']
