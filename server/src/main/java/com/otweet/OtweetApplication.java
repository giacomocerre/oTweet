package com.otweet;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.otweet.entity.Tweet;
import com.otweet.repositories.TweetRepository;

@SpringBootApplication
public class OtweetApplication {

	public OtweetApplication() {}

	public static void main(String[] args) {
		SpringApplication.run(OtweetApplication.class, args);
	}

	@Bean
    public CommandLineRunner seedDatabase(TweetRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.saveAll(List.of(
                    new Tweet("Baratheon_R", "Ciao mondo, questo è il mio primo otweet!", 1681930800000L),
                    new Tweet("BestLannister", "Benvenut* su OTweet!", 1681930900000L),
                    new Tweet("AriaS", " Fatto quello che dovevo fare✅ (forse)", 1681930800000L)
                ));
            }
        };
    }

}
