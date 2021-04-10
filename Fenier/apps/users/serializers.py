from rest_framework import serializers
from .models import Users

class UsersSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=20)
    id = serializers.IntegerField(required=False)
    password = serializers.CharField(max_length=20)
    authority = serializers.IntegerField(required=False)
    created_date = serializers.DateTimeField(required=False)
    email = serializers.EmailField(required=False)

    def create(self, validated_data):
        return Users.objects.create(**validated_data)

    def update(self,instance,validated_data):
        instance.name = validated_data.get('name',instance.name)
        instance.id = validated_data.get('id',instance.id)
        instance.password = validated_data.get('password',instance.password)
        instance.authority = validated_data.get('authority',instance.authority)
        instance.created_date = validated_data.get('created_date',instance.created_date)
        instance.email = validated_data.get('email',instance.email)
        instance.save()
        return instance