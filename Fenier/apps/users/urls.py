from django.urls import path

from . import views

app_name = 'users'
urlpatterns = [
    path(r'',views.index,name='index'),
    path(r'all',views.UsersAll.as_view()),
    path('name=<str:name>', views.UsersName.as_view())
]