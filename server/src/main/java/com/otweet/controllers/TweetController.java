package com.otweet.controllers;

import com.otweet.entity.Tweet;
import com.otweet.services.TweetService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.List;
import java.util.TimeZone;

@RestController
@RequestMapping("/api")
public class TweetController {

    private final TweetService tweetService;

    public TweetController(TweetService tweetService) {
        this.tweetService = tweetService;
    }

    @GetMapping("/tweets")
    public List<Tweet> getAllTweets() {
        List<Tweet> tweets = tweetService.getAllTweets();
        for (Tweet tweet : tweets) {
            tweet.setFormattedDate(formatDate(tweet.getDate()));
        }
        return tweets;
    }

    @PostMapping("/save")
    public ResponseEntity<Tweet> saveTweet(@RequestBody Tweet tweet) {
        tweet.setDate(Instant.now().toEpochMilli());
        Tweet saved = tweetService.saveTweet(tweet);
        saved.setFormattedDate(formatDate(saved.getDate()));
        return ResponseEntity.ok(saved);
    }

    private String formatDate(long epochDate) {
        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm - dd/MM/yyyy 'GMT'");
        sdf.setTimeZone(TimeZone.getTimeZone("GMT"));
        return sdf.format(epochDate);
    }
}
