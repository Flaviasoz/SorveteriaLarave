<?php

namespace App\Providers;

use App\Models\Estado;
use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Events\Dispatcher;
use JeroenNoten\LaravelAdminLte\Events\BuildingMenu;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(Dispatcher $events)
    {
        $events->listen(BuildingMenu::class, function (BuildingMenu $event) {
            $event->menu->add('ESTADOS');
            $event->menu->add([
                'text'        => 'Listagem',
                'url'         => 'estados',
                'icon'        => 'fas fa-fw fa-users',
                'label'       => Estado::count(),
                'label_color' => 'success',
            ]);
        });
    }
}
