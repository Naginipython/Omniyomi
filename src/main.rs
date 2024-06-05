// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// use scrape::*;
use library::*;
use plugins::*;

// mod scrape;
mod library;
mod plugins;
mod database;
mod schema;

fn main() {
  // geckodriver
  // let _driver = Command::new("geckodriver").spawn().map_err(|e| format!("Failed to start Geckodriver: {}", e)).expect("Error: Couldn't start Geckodriver");
  jstime_core::init(None);
  init_plugins();

  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      // library.rs
      get_lib, add_to_lib, remove_from_lib, update_lib, 
      // plugins.rs
      search, get_plugin_names, get_chapters
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}