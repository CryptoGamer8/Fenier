from rest_framework import serializers
from .models import Movies

class MoviesSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=40)
    year = serializers.IntegerField(required=False)  
    outline = serializers.CharField(required=False)
    cast = serializers.CharField(required=False)
    genre = serializers.CharField(max_length=40,required=False)
    rates = serializers.FloatField(required=False)
    movie_url = serializers.CharField(max_length=80,required=False)
    img_url = serializers.CharField(max_length=80,required=False)
    reviews_url = serializers.CharField(max_length=80,required=False)

    def create(self, validated_data):
        return Movies.objects.create(**validated_data)

    def update(self,instance,validated_data):
        instance.id = validated_data.get('id',instance.id)
        instance.name = validated_data.get('name',instance.name)
        instance.year = validated_data.get('year',instance.year)
        instance.outline = validated_data.get('outline',instance.outline)
        instance.cast = validated_data.get('cast',instance.cast)
        instance.genre = validated_data.get('genre',instance.genre)
        instance.rates = validated_data.get('rates',instance.rates)
        instance.movie_url = validated_data.get('movie_url',instance.movie_url)
        instance.img_url = validated_data.get('img_url',instance.img_url)
        instance.reviews_url = validated_data.get('reviews_url',instance.reviews_url)
        instance.save()
        return instance