from django.db import models

# Create your models here.
class Users(models.Model):
    name = models.CharField(primary_key=True,max_length=15,default='dummy')
    id = models.IntegerField('user id',auto_created=True)
    password = models.CharField(max_length=15)
    authority = models.IntegerField('authority')
    created_date = models.DateTimeField('date created')
    email = models.EmailField('user email')

    def __str__(self):
        return self.name

    