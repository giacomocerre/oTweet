package com.otweet.services;

import com.otweet.entity.Tweet;
import com.otweet.repositories.TweetRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TweetService {

    private final TweetRepository tweetRepository;

    public TweetService(TweetRepository tweetRepository) {
        this.tweetRepository = tweetRepository;
    }

    public List<Tweet> getAllTweets() {
        return tweetRepository.findAll();
    }

    public Tweet saveTweet(Tweet tweet) {
        Tweet tweetSaved = tweetRepository.save(tweet);
        return tweetSaved;
    }
}
