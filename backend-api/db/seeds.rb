# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Product.create([
    {name: "Black Amonsta Crewneck", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/crewnecks/am_blk_cr.png",
        quantity: 10, price: 35.00},
    {name: "Grey Amonsta Crewneck", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/crewnecks/am_grey_cr.png",
        quantity: 10, price: 35.00},
    {name: "White Amonsta Crewneck", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/crewnecks/am_white_cr.png",
        quantity: 10, price: 35.00},
    {name: "Black Zombie Crewneck", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/crewnecks/zom_blk_cr.png",
        quantity: 10, price: 55.00},
    {name: "Grey Area Zombie Crewneck", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/crewnecks/zom_grey_area_cr.png",
        quantity: 10, price: 55.00},
    {name: "Light Brown Zombie Crewneck", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/crewnecks/zom_light_bro_cr.png",
        quantity: 10, price: 55.00},
    {name: "White Zombie Crewneck", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/crewnecks/zom_white_cr.png",
        quantity: 10, price: 55.00},


    {name: "B&W Baseball Tee", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/shirts/am_baseball_tee.png",
        quantity: 10, price: 30.00},
    {name: "Aqua Zombie Shirt", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/shirts/zom_aqua.png",
        quantity: 10, price: 25.00},
    {name: "Baby Blues Zombie Shirt", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/shirts/zom_baby_blues.png",
        quantity: 10, price: 25.00},
    {name: "Brownie Pie Zombie Shirt", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/shirts/zom_brownie_pie.png",
        quantity: 10, price: 25.00},
    {name: "Grey Area Zombie Shirt", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/shirts/zom_grey_area.png",
        quantity: 10, price: 25.00},
    {name: "Red Zone Zombie Shirt", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/shirts/zom_red_zone.png",
        quantity: 10, price: 25.00},
    {name: "White Zombie Shirt", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/shirts/zom_white.png",
        quantity: 10, price: 25.00},


    {name: "Black Lime Mask", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/masks/black_lime_mask.png",
        quantity: 15, price: 15.00},
    {name: "Grey Mask", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/masks/grey_mask.png",
        quantity: 15, price: 15.00},
    {name: "Lime Mask", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/masks/lime_mask.png",
        quantity: 15, price: 15.00},
    {name: "Red Black Mask", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/masks/red_black_mask.png",
        quantity: 15, price: 15.00},
    {name: "Red Grey Mask", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/masks/red_grey_mask.png",
        quantity: 15, price: 15.00},
    {name: "White Lime Mask", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/masks/white_lime_mask.png",
        quantity: 15, price: 15.00},


    {name: "Black Amonsta Pillows", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/pillows/am_blk_pillows.png",
        quantity: 5 , price: 30.00},
    {name: "Lime Amonsta Pillows", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/pillows/am_lime_pillows.png",
        quantity: 5 , price: 30.00},
    {name: "Red Amonsta Pillows", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/pillows/am_red_pillows.png",
        quantity: 5 , price: 30.00},   
    {name: "Black Zombie Pillows", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/pillows/zom_am_blk.png",
        quantity: 5 , price: 30.00},
    {name: "Grey Zombie Pillows", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/pillows/zom_am_grey.png",
        quantity: 5 , price: 30.00},   
    {name: "Red Zombie Pillows", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/pillows/zom_am_red.png",
        quantity: 5 , price: 30.00},
    {name: "White Zombie Pillows", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/pillows/zom_am_white.png",
        quantity: 5 , price: 30.00},


    {name: "Charcoal Zombie Mug", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/mugs/blk_mug.png",
        quantity: 5 , price: 25.00},   
    {name: "White Zombie Mug", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/mugs/white_mug.png",
        quantity: 5 , price: 25.00},
    {name: "Zombie Flesh Mug", image_url: "https://amonsta-online-merch.s3-us-west-2.amazonaws.com/mugs/zom_mug.png",
        quantity: 5 , price: 25.00}  
    ])