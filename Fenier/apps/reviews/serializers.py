from rest_framework import serializers
from .models import Reviews

class ReviewsSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    # logical foreign key
    user_name = serializers.CharField(max_length=20)
    movie_id = serializers.IntegerField()
    movie_name = serializers.CharField(max_length=40)
    rates = serializers.IntegerField()
    comments = serializers.CharField()
    comments_img = serializers.CharField(max_length=80,required=False)