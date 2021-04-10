from django.db import models

# Create your models here.
class Reviews(models.Model):
    id = models.AutoField('review id',primary_key=True)
    # logical foreign key
    user_name = models.CharField('user name',max_length=20)
    movie_id = models.IntegerField('movie id')
    movie_name = models.CharField('movie name',max_length=40)
    rates = models.IntegerField('rates')
    comments = models.TextField('comment')
    comments_img = models.CharField('appendix image',max_length=80,blank=True,null=True)