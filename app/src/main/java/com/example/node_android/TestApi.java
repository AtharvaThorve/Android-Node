package com.example.node_android;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface TestApi {

    @GET("posts")
    Call<List<Post>> getPosts();
}
