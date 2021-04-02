from django.shortcuts import render
from .models import Users

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