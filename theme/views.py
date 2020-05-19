from django.shortcuts import render
from .models import Theme
# Create your views here.
def detail(request,numero,nom):
    
    theme = Theme.objects.get(numero=numero,slug=nom)
    
    template = "theme/detail.html"
    context = {
        'theme':theme
    }
    return render(request,template,context)