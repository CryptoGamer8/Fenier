from django.urls import path
from . import views

app_name = 'movies'
urlpatterns = [
    path('', views.index, name='index'),
    path(r'all',views.MoviesAll.as_view()),
    path(r'name=<str:name>',views.MoviesName.as_view()),
    path(r'id=<int:id>',views.MoviesId.as_view())
]