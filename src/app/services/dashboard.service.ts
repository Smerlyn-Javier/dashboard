import { Injectable } from '@angular/core';
import { Order, Truck } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }


  getTrucks(): Array<Truck> {
    return [{ driver: 'Jose', location: 'Santo Domingo', status: 'EN RUTA', truckId: '12A12' },{ driver: 'Antonio', location: 'Santo Domingo', status: 'EN RUTA', truckId: '34A32' }]
  }
  getOrders(): Array<Order> {
    return [{
      destination: 'Plaza Duarte',
      customer: 'Plaza Duarte SRL',
      orderId: '123000',
      origin: 'Ferreteria Innova Centro',
      status: 'ACTIVA',
      route: this.positions
    },
    {
      destination: 'Supermercado Nacional 27 de Febrero',
      customer: 'El Nacional',
      orderId: '524000',
      origin: 'Agora Mall',
      status: 'ACTIVA',
      route: this.position2
    }
    ]
  }

  positions = [
    {
      "lat": 18.482860000000002,
      "lng": -69.92930000000001
    },
    {
      "lat": 18.48297,
      "lng": -69.93109000000001
    },
    {
      "lat": 18.483060000000002,
      "lng": -69.93304
    },
    {
      "lat": 18.483120000000003,
      "lng": -69.93391000000001
    },
    {
      "lat": 18.48318,
      "lng": -69.93426000000001
    },
    {
      "lat": 18.483400000000003,
      "lng": -69.93508
    },
    {
      "lat": 18.48365,
      "lng": -69.93602
    },
    {
      "lat": 18.48386,
      "lng": -69.93684
    },
    {
      "lat": 18.483890000000002,
      "lng": -69.93695000000001
    },
    {
      "lat": 18.48386,
      "lng": -69.9371
    },
    {
      "lat": 18.48402,
      "lng": -69.93769
    },
    {
      "lat": 18.48432,
      "lng": -69.93876
    },
    {
      "lat": 18.48442,
      "lng": -69.93926
    },
    {
      "lat": 18.484440000000003,
      "lng": -69.9397
    },
    {
      "lat": 18.48442,
      "lng": -69.93998
    },
    {
      "lat": 18.48432,
      "lng": -69.94043
    },
    {
      "lat": 18.484,
      "lng": -69.94123
    },
    {
      "lat": 18.48329,
      "lng": -69.94289
    },
    {
      "lat": 18.48311,
      "lng": -69.94340000000001
    },
    {
      "lat": 18.482960000000002,
      "lng": -69.9439
    },
    {
      "lat": 18.482840000000003,
      "lng": -69.94448
    },
    {
      "lat": 18.482680000000002,
      "lng": -69.94548
    },
    {
      "lat": 18.48261,
      "lng": -69.94597
    },
    {
      "lat": 18.48253,
      "lng": -69.94641
    },
    {
      "lat": 18.48241,
      "lng": -69.94724000000001
    },
    {
      "lat": 18.48233,
      "lng": -69.94800000000001
    },
    {
      "lat": 18.48225,
      "lng": -69.94913000000001
    },
    {
      "lat": 18.48216,
      "lng": -69.95101000000001
    },
    {
      "lat": 18.48206,
      "lng": -69.95241
    },
    {
      "lat": 18.48198,
      "lng": -69.95371
    },
    {
      "lat": 18.48186,
      "lng": -69.95465
    },
    {
      "lat": 18.481830000000002,
      "lng": -69.95488
    },
    {
      "lat": 18.48176,
      "lng": -69.95526000000001
    },
    {
      "lat": 18.481550000000002,
      "lng": -69.95607000000001
    },
    {
      "lat": 18.48128,
      "lng": -69.95708
    },
    {
      "lat": 18.48114,
      "lng": -69.95768000000001
    },
    {
      "lat": 18.48081,
      "lng": -69.95909
    },
    {
      "lat": 18.48046,
      "lng": -69.96075
    },
    {
      "lat": 18.48009,
      "lng": -69.96263
    },
    {
      "lat": 18.479740000000003,
      "lng": -69.96424
    },
    {
      "lat": 18.479380000000003,
      "lng": -69.9658
    },
    {
      "lat": 18.479110000000002,
      "lng": -69.96709
    },
    {
      "lat": 18.47904,
      "lng": -69.96759
    },
    {
      "lat": 18.478990000000003,
      "lng": -69.96828000000001
    },
    {
      "lat": 18.479010000000002,
      "lng": -69.96885
    },
    {
      "lat": 18.479090000000003,
      "lng": -69.96936000000001
    },
    {
      "lat": 18.47923,
      "lng": -69.96987
    },
    {
      "lat": 18.479390000000002,
      "lng": -69.97036
    },
    {
      "lat": 18.47953,
      "lng": -69.97066000000001
    },
    {
      "lat": 18.4797,
      "lng": -69.97106000000001
    },
    {
      "lat": 18.479950000000002,
      "lng": -69.97141
    },
    {
      "lat": 18.48028,
      "lng": -69.97181
    },
    {
      "lat": 18.48149,
      "lng": -69.9731
    },
    {
      "lat": 18.481930000000002,
      "lng": -69.97355
    },
    {
      "lat": 18.482850000000003,
      "lng": -69.9745
    },
    {
      "lat": 18.483690000000003,
      "lng": -69.97538
    },
    {
      "lat": 18.484170000000002,
      "lng": -69.97584
    },
    {
      "lat": 18.485370000000003,
      "lng": -69.97708
    },
    {
      "lat": 18.48589,
      "lng": -69.97761000000001
    },
    {
      "lat": 18.48654,
      "lng": -69.97826
    },
    {
      "lat": 18.48788,
      "lng": -69.97968
    },
    {
      "lat": 18.488010000000003,
      "lng": -69.97982
    },
    {
      "lat": 18.488090000000003,
      "lng": -69.97983
    },
    {
      "lat": 18.48818,
      "lng": -69.97985
    },
    {
      "lat": 18.48833,
      "lng": -69.97983
    },
    {
      "lat": 18.488380000000003,
      "lng": -69.97982
    },
    {
      "lat": 18.48852,
      "lng": -69.97971000000001
    },
    {
      "lat": 18.488850000000003,
      "lng": -69.97946
    },
    {
      "lat": 18.48871,
      "lng": -69.97930000000001
    },
    {
      "lat": 18.48853,
      "lng": -69.97911
    },
    {
      "lat": 18.48874,
      "lng": -69.97888
    }
  ]
  position2 = [
    {
        "lat": 18.48392,
        "lng": -69.94029
    },
    {
        "lat": 18.483980000000003,
        "lng": -69.94027000000001
    },
    {
        "lat": 18.484150000000003,
        "lng": -69.94016
    },
    {
        "lat": 18.48422,
        "lng": -69.9397
    },
    {
        "lat": 18.48422,
        "lng": -69.9393
    },
    {
        "lat": 18.48414,
        "lng": -69.9388
    },
    {
        "lat": 18.48348,
        "lng": -69.93625
    },
    {
        "lat": 18.48299,
        "lng": -69.93442
    },
    {
        "lat": 18.48292,
        "lng": -69.93412000000001
    },
    {
        "lat": 18.482840000000003,
        "lng": -69.93348
    },
    {
        "lat": 18.482740000000003,
        "lng": -69.93140000000001
    },
    {
        "lat": 18.48271,
        "lng": -69.93111
    },
    {
        "lat": 18.48224,
        "lng": -69.93112
    },
    {
        "lat": 18.481160000000003,
        "lng": -69.93118000000001
    },
    {
        "lat": 18.478930000000002,
        "lng": -69.93129
    },
    {
        "lat": 18.478640000000002,
        "lng": -69.93129
    },
    {
        "lat": 18.47717,
        "lng": -69.93136000000001
    },
    {
        "lat": 18.475450000000002,
        "lng": -69.93143
    },
    {
        "lat": 18.474610000000002,
        "lng": -69.93146
    },
    {
        "lat": 18.473170000000003,
        "lng": -69.93152
    },
    {
        "lat": 18.471210000000003,
        "lng": -69.93161
    },
    {
        "lat": 18.47115,
        "lng": -69.93159
    },
    {
        "lat": 18.47012,
        "lng": -69.93164
    },
    {
        "lat": 18.46929,
        "lng": -69.93168
    },
    {
        "lat": 18.469260000000002,
        "lng": -69.93183
    },
    {
        "lat": 18.469070000000002,
        "lng": -69.93230000000001
    },
    {
        "lat": 18.46815,
        "lng": -69.93176000000001
    },
    {
        "lat": 18.46639,
        "lng": -69.9308
    },
    {
        "lat": 18.465510000000002,
        "lng": -69.9303
    },
    {
        "lat": 18.46544,
        "lng": -69.93026
    },
    {
        "lat": 18.465490000000003,
        "lng": -69.93015000000001
    },
    {
        "lat": 18.465600000000002,
        "lng": -69.92994
    }
  ]
}