from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Reviews
from .serializers import ReviewsSerializer

# Create your views here.
def index(request):
    return render(request,'reviews/index.html')

class ReviewsAll(APIView):

    def get(self,request):
        reviews = Reviews.objects.all()
        serializer = ReviewsSerializer(reviews,many=True)
        return Response(serializer.data)

class ReviewsId(APIView):

    def get(self,request,id):
        try:
            reviews = Reviews.objects.get(id=id)
            serializer = ReviewsSerializer(reviews)
            return Response(serializer.data)
        except Reviews.DoesNotExist:
            return HttpResponse(status=404)

    def post(self,request,id):
        serializer = ReviewsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)

    def put(self,request,id):
        try:
            reviews = Reviews.objects.get(id=id)
            if id != request.data['id']:
                return HttpResponse(status=400)
                # update existing reviews with request.data
            serializer = ReviewsSerializer(reviews,data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors,status=400)
        except Reviews.DoesNotExist:
            return HttpResponse(status=404)

    def delete(self,request,id):
        try:
            reviews = Reviews.objects.get(id=id)
            reviews.delete()
            return HttpResponse(status=204)
        except:
            return HttpResponse(status=404)

class ReviewsUserName(APIView):
    
    def get(self,request,name):
        reviews = Reviews.objects.filter(user_name=name)
        serializer = ReviewsSerializer(reviews, many=True)
        return Response(serializer.data)

class ReviewsMoviesId(APIView):
    
    def get(self,request,id):
        reviews = Reviews.objects.filter(movie_id=id)
        serializer = ReviewsSerializer(reviews, many=True)
        return Response(serializer.data)

class ReviewsMoviesName(APIView): 
    def get(self, request, name):
        reviews = Reviews.objects.filter(movie_name=name)
        serializer = ReviewsSerializer(reviews, many=True)
        return Response(serializer.data)