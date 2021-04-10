from django.utils import timezone
from django.db import models

# Create your models here.
class Users(models.Model):
    
    name = models.CharField(primary_key=True,max_length=20)
    id = models.IntegerField('user id',default=0)
    password = models.CharField(max_length=20)
    authority = models.IntegerField('authority',default=0)
    created_date = models.DateTimeField('date created',default=timezone.now)
    email = models.EmailField('user email',default='dummy@gmail.com')

    def __str__(self):
        return self.name

    # id auto increment
    def save(self, *args, **kwargs):
        # This means that the model isn't saved to the database yet
        if self._state.adding:
            # Get the maximum display_id value from the database
            last_id = Users.objects.all().aggregate(largest=models.Max('id'))['largest']
            if last_id is not None:
                self.id = last_id + 1
        super(Users, self).save(*args, **kwargs)
