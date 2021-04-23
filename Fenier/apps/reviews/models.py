from django.db import models

# Create your models here.
class Reviews(models.Model):
    id = models.IntegerField('review id',primary_key=True,default=1)
    # logical foreign key
    user_name = models.CharField('user name',max_length=20)
    movie_id = models.IntegerField('movie id')
    movie_name = models.CharField('movie name',max_length=40)
    rates = models.IntegerField('rates')
    comments = models.TextField('comment')
    comments_img = models.CharField('appendix image',max_length=80,blank=True,null=True)

    def save(self, *args, **kwargs):
        # This means that the model isn't saved to the database yet
        if self._state.adding:
            # Get the maximum display_id value from the database
            last_id = Reviews.objects.all().aggregate(largest=models.Max('id'))['largest']
            if last_id is not None:
                self.id = last_id + 1
        super(Reviews, self).save(*args, **kwargs)