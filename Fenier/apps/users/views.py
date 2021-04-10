from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Users
from .serializers import UsersSerializer

# Create your views here.
def index(request):
    # create
    # Users.objects.create(name='zk',id=0,password=111111,authority=0,created_date='2020-04-02',email='zhangkan1111@outlook.com')
    
    # read
    # Users.objects.all()
    # select_entries = Users.objects.filter(id=1) // return QuerySet 
    
    # update 
    # user_zk = Users.objects.get(name='zk')     //return single object; Exception throwed.
    # user_zk.password = 222222
    # user_zk.save()

    # delete
    # Users.objects.filter(id=0).delete()
    return render(request,'users/index.html')

class UsersAll(APIView):
    def get(self,request):
        users = Users.objects.all()
        serializer = UsersSerializer(users, many=True)
        return Response(serializer.data)

class UsersName(APIView):
    
    def get(self,request,name):
        try:
            users = Users.objects.get(name=name)
            serializer = UsersSerializer(users)
            return Response(serializer.data)
        except Users.DoesNotExist:
            return HttpResponse(status=404)

    def post(self,request,name):
        serializer = UsersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors, status=400)

# Django can't update primary key's value
    def put(self,request,name):
        try:
            users = Users.objects.get(name=name)
            if name != request.data['name']:
                return HttpResponse(status=400)
            serializer = UsersSerializer(users,data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors,status=400)
        except Users.DoesNotExist:
            return HttpResponse(status=404)

    def delete(self,request,name):
        try:
            users = Users.objects.get(name=name)
            users.delete()
            return HttpResponse(status=204)
        except:
            return HttpResponse(status=404)