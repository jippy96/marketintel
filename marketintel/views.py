from django.shortcuts import render
from django.http import JsonResponse
from theme.models import Theme

def home(request):
    
    context = {
        'themes': Theme.objects.all()
    }
    return render(
        request,
        'pages/home.html',context
    )

# méthode pour la recherche 
def search(request):
    if request.GET['q']:
        tableau = {
            "success": request.GET['q']
        }
        return JsonResponse(tableau)
    return render(request, 'pages/home.html')


def recherche(request):
    
    item = request.GET['q']
    
    # je lance les requetes de select avec ce joker dans les tables
    
    return render(
        request,
        'pages/recherche.html',{
            'item': item,
        }
    )