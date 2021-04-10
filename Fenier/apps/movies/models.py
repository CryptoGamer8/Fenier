from django.db import models

# Create your models here.
class Movies(models.Model):
    id = models.IntegerField('movie id',primary_key=True,default=1)
    name = models.CharField('movie name',max_length=40)
    year = models.IntegerField('released year')  
    outline = models.TextField('plot outline')
    cast = models.TextField('principle cast')
    genre = models.CharField('movie genre', max_length=40)
    rates = models.FloatField('average user rating')
    movie_url = models.CharField('url to official site',max_length=80)
    img_url = models.CharField('url to movie posts',max_length=80,null=True,blank=True)
    reviews_url = models.CharField('url to reviews',max_length=80,null=True,blank=True)

      # id auto increment
    def save(self, *args, **kwargs):
        # This means that the model isn't saved to the database yet
        if self._state.adding:
            # Get the maximum display_id value from the database
            last_id = Movies.objects.all().aggregate(largest=models.Max('id'))['largest']
            if last_id is not None:
                self.id = last_id + 1
        super(Movies, self).save(*args, **kwargs)