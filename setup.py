from setuptools import setup

setup(
    name='xblock-simplevideo',
    version='0.1',
    description='SimpleVideo XBlock Tutorial Sample',
    packages=['simplevideo'],
    entry_points={
        'xblock.v1': [
            'simplevideo = simplevideo:SimpleVideoBlock',
        ],
        'xmodule.v1': [
            'simplevideo = simplevideo:SimpleVideoBlock',
        ]
    }
)
