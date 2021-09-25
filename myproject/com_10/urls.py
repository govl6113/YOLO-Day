from django.urls import path
from . import views



urlpatterns = [

    path('update_post/<int:pk>/', views.PostUpdate.as_view()),
    path('<int:pk>/', views.PostDetail.as_view()),
    path('',views.PostList.as_view(),name = "Travel"),
    path('update_comment/<int:pk>/', views.CommentUpdate.as_view()),
    path('delete_comment/<int:pk>/', views.delete_comment),
    # path('delete_comment/<int:pk>/', views.delete_comment),
    path('<int:pk>/new_comment/',views.new_comment),
    path('create_post/', views.PostCreate.as_view()),

    path('delete_post/<int:pk>',views.delete_post),

    
    # path('<int:pk>/', views.single_post_page),
    # path('', views.index), 
]