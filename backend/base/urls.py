from django.urls import path

from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    # TokenRefreshView,
)
from rest_framework_simplejwt.views import TokenVerifyView

urlpatterns = [
    path('users/login', TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    # path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('', views.get_routes, name="routes"),
    path('user/profile', views.get_user_profile, name="users_profile"),
    path('products/', views.get_products, name="products"),
    path('products/<str:pk>', views.get_product, name='product')
]
