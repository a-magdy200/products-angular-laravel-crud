<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        for ($i = 0; $i < 10; $i++) {
            \App\Product::create([
                'name' => 'product ' . ($i + 1),
                'description' => Str::random(400),
                'picture' => 'https://picsum.photos/200/300/?image='. ($i + 30),
            ]);
        }
    }
}
