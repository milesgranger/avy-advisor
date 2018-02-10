#![feature(plugin)]
#![plugin(rocket_codegen)]

extern crate rocket;
#[macro_use] extern crate rocket_contrib;
#[macro_use] extern crate serde_derive;

use std::collections::HashMap;
use rocket_contrib::{Json, Value, Template};


#[derive(Serialize)]
struct WeatherReport {
    station: String,
    temperature: f32
}

#[get("/")]
fn index() -> Template {
    let mut context = HashMap::new();
    context.insert("title", "title-value");
    Template::render("index", &context)
}

#[get("/weather/<name>")]
fn weather_report(name: String) -> Json<WeatherReport> {
    let report = WeatherReport {station: name, temperature: 32.4};
    Json(report)
}

#[get("/echo/<name>")]
fn echo(name: String) -> Json<Value> {
    let val = json!({
        "key": name
    });
    Json(val)
}

fn main() {
    rocket::ignite()
        .mount("/", routes![index, echo, weather_report])
        .attach(Template::fairing())
        .launch();
}