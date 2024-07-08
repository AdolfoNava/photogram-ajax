// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import jquery from "jquery";
window.jQuery = jquery;
window.$ = jquery;
console.log('jQuery version:', $.fn.jquery);  // Check if jQuery is loaded
import Rails from "@rails/ujs"
Rails.start();
