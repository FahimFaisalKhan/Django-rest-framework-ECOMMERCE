# Generated by Django 4.1.1 on 2022-10-15 13:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0003_order_shippingaddress_review_orderitem"),
    ]

    operations = [
        migrations.AddField(
            model_name="product",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to=""),
        ),
    ]
