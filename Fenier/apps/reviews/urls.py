from django.urls import path

from . import views

app_name = 'reviews'
urlpatterns = [
    path('',views.index,name='index'),
    path('all',views.ReviewsAll.as_view()),
    path('id=<int:id>',views.ReviewsId.as_view()),
    path('users/name=<str:name>',views.ReviewsUserName.as_view()),
    path('movies/name=<str:name>',views.ReviewsMoviesName.as_view()),
    path('movies/id=<int:id>',views.ReviewsMoviesId.as_view()),
    #path('list/',views.list)
]