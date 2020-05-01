from django.shortcuts import render

# Create your views here.

def connexion(request):
	context = {}
	return render(request, 'compte/connexion.html', context)

def inscription(request):
	context = {}
	return render(request, 'compte/inscription.html', context)