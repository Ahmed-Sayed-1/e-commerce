import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RequestDateApiService {

  constructor(private http: HttpClient) {}

  getList(sortOrder: string): Observable<any> {
    return this.http.get(`https://dummyjson.com/products`);
  }

  getDetails(id: string): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
/*


@Injectable({
  providedIn: 'root',
})
export class RecipesRequestsService {
  constructor(private http: HttpClient) {}

  getRecipesList(sortOrder: string): Observable<any> {
    return this.http.get(`${environment.api_base_url}/recipes`, {
      params: {
        sortBy: 'name',
        order: sortOrder,
      },
      headers: {
        'Accept-Language': 'ar',
        Autherization: 'ACCESS_TOKEN',
      },
    });
  }

  getRecipeDetails(id: string): Observable<any> {
    return this.http.get(`https://dummyjson.com/recipes/${id}`);
  }
}

// TO HANDLE HTTP REQUESTS
// app.config => import and use provideHTTPCLient();
// SERVICE.ts => inject httpClient service 
// SERVICE.ts => define request => return this.httpInstance.get/post/put/delete('url')

// COMPONENT.ts => inject request service constructor() or inject() method
// IF API NEEDED WHEN COMPOENENT LOAD => ngOnInit() => this.serviceInstance.requestMethod().subscribe((res)); 
// SAVE THE RESPONSE DATA IN YOUR COMPONENT TO USE IT FOR BINING IF NEEDED



*/