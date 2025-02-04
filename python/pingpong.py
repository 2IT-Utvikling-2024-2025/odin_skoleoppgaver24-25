import pygame
pygame.init()
screen = pygame.display.set_mode([300, 300])
pygame.display.set_caption("Ping Pong")
#I skipped framerate

#Colors
Black = (0, 0, 0)
White = (255, 255, 255)
Red = (255, 0, 0)
Green = (0, 255, 0)
Blue = (0, 0, 255)

#Player Controlls
player_y = 130
computer_y = 130
ball_x = 145
ball_y = 145


run = True
while run:
    screen.fill(Black)
    player = pygame.draw.rect(screen, White, (5, player_y, 10, 40))
    computer = pygame.draw.rect(screen, White, (285, computer_y, 10, 40))
    ball = pygame.draw.rect(screen, White, (ball_x, ball_y, 10, 10))

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            run = False
            
    pygame.display.flip()

pygame.quit()
