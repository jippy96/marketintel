from django.shortcuts import render

# Create your views here.

def post(request):
	context = {}
	return render(request, 'partage/post.html', context)

