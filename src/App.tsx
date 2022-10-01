import { createStyles, Container, Title, Text, Button, BackgroundImage } from '@mantine/core';
import background from "./media/background.jpg";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height:'100vh',
    boxSizing:'border-box',
    backgroundImage:
      `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%),url(${background})`,
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

export function HeroImageRight() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Twój{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
               Kalendarzyk Winiarza
              </Text>{' '}
             jest gotowy Ci pomóc.
            </Title>

            <Text className={classes.description} mt={30}>
            Przekonaj się jak łatwe potrafi być tworzenie i przechowywanie notatek o twoich trunkach! Zapisuj swoje ukochane przepisy w chmurze, przeglądaj zdjęcia swoich seksownych nastawów, a wszystko to
            <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'blue' }}
              > ZA DARMO.
              </Text>
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Ayyyyyyyy, wpuść mnie bydlaku
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default HeroImageRight