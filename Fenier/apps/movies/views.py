from django.http.response import HttpResponse
from rest_framework.response import Response
from .serializers import MoviesSerializer
from django.shortcuts import render
from rest_framework.views import APIView
from .models import Movies

# Create your views here.
def index(request):
    return render(request,"movies/index.html")

class MoviesAll(APIView):
    def get(self,request):
        movies = Movies.objects.all()
        serializer = MoviesSerializer(movies,many=True)
        return Response(serializer.data)

class MoviesName(APIView):
    #only get the first movie name
    def get(self,request,name):
        try:
            movies = Movies.objects.get(name=name)
            serializer = MoviesSerializer(movies)
            return Response(serializer.data)
        except Movies.DoesNotExist:
            return HttpResponse(status=404)

class MoviesId(APIView):

    def get(self,request,id):
        try:
            movies = Movies.objects.get(id=id)
            serializer = MoviesSerializer(movies)
            return Response(serializer.data)
        except Movies.DoesNotExist:
            return HttpResponse(status=404)