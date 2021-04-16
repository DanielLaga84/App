package com.example.app

import com.example.app.model.CoffeeShopModel
import com.example.app.repository.CoffeeShopRepository
import org.springframework.boot.ApplicationRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class AppApplication

@Bean
fun run(repository: CoffeeShopRepository) = ApplicationRunner {
    repository.save(CoffeeShopModel(
        name = "Some coffeeshop 1",
        address = "udawany adress1, Gdynia 81-341 Poland",
        phone = "58 621 33 33",
        priceOfCoffee = 1.50,
        powerAccessible = true,
        internetReliability = 5
    ))
    repository.save(CoffeeShopModel(
        name = "Some coffeeshop 2",
        address = "udawany adress 551, Gdynia 81-341 Poland",
        phone = "58 621 33 39",
        priceOfCoffee = 2.50,
        powerAccessible = true,
        internetReliability = 3
    ))
}

fun main(args: Array<String>) {
    runApplication<AppApplication>(*args)
}
