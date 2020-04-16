from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(
        request,
        'education/home.html',{
            
        }
    )


# méthode qui traite la vue garderie
def garderie(request):
    return render(
        request,
        'education/garderie.html',
    )
