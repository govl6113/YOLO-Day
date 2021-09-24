from django.urls import path
from . import views
from . import views as single_pages

urlpatterns = [
    path('about_me/', views.about_me, name="about_me"),
    path('login/', single_pages.login, name="login"),
    path('logout/', single_pages.logout, name="logout"),
    path('login1/',views.login1,name="login1"),

]